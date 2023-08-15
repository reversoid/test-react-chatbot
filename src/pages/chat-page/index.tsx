import { H1 } from "../../shared/ui/H1/H1";
import { P } from "../../shared/ui/P/P";
import { Wrapper } from "../../shared/Wrapper/Wrapper";
import { Chat } from "../../widgets/Chat";
import { ChatWrapper } from "./ui/ChatWrapper/ChatWrapper";
import { PageWrapper } from "./ui/PageWrapper/PageWrapper";

export const ChatPage = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <H1>Bot Chat</H1>
        <P>AI-based service</P>
        <ChatWrapper>
          <Chat />
        </ChatWrapper>
      </Wrapper>
    </PageWrapper>
  );
};
