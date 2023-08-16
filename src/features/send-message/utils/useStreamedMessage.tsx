import { useCallback, useState } from "react";
import ky from "ky";

interface Chunk {
  status: 'content' | 'done';
  value: string | null
}

export const useStreamedMessage = () => {
  const [responseMessage, setResponseMessage] = useState({
    text: "",
    done: false,
  });

  const sendMessage = useCallback(async (message: string) => {
    setResponseMessage({ done: false, text: "" });

    try {
      const response = await ky.post(
        "http://185.46.8.130/api/v1/chat/send-message",
        {
          json: { message },
        }
      );
      if (!response || !response.body) {
        throw new Error("Could not get response");
      }

      const reader = response.body.getReader();

      let accumulatedChars: string[] = [];

      const readChunk = async () => {
        const { done, value } = await reader.read();
        if (done) {
          return;
        }

        for (let i = 0; i < value.byteLength; i++) {
          accumulatedChars.push(String.fromCharCode(value[i]));

          // Попробуем разобрать текущую строку как JSON
          const jsonString = accumulatedChars.join("");
          let chunk: Chunk;
          try {
            chunk = JSON.parse(jsonString);
          } catch (e) {
            // Если это не корректный JSON, просто продолжаем накапливать символы
            continue;
          }
          

          // Если мы добрались сюда, значит у нас есть корректный чанк JSON. Обработаем его.
          if (chunk.status === "content") {
            setResponseMessage((prev) => ({
              text: prev.text + chunk.value,
              done: false,
            }));
          } else if (chunk.status === "done") {
            setResponseMessage((prev) => ({ ...prev, done: true }));
          }

          // Очистите аккумулятор для следующего чанка
          accumulatedChars = [];
        }

        readChunk();
      };

      readChunk();
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }, []);

  return { responseMessage, sendMessage };
};
