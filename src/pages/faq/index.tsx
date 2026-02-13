import ClientOnly from "@/components/generics/nextShit/ClientOnly";
import { PageTitle } from "@/components/generics/titles/PageTitle";
import { qaArray } from "@/data/qa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const faq = () => {
  return (
    <ClientOnly>
      <PageTitle>R fAq Q</PageTitle>
      <div className="font-katin font-medium text-2xl">
        <p>
          Here is a FAQ that should answer most of your questions. If you have
          any other questions or suggestions, please contact us
        </p>
      </div>
      <div className="flex flex-col gap-y-5 pt-5" id="faq-container">
        {qaArray.map((qa, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <div className="text-gotchi-300">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {qa.q}
              </ReactMarkdown>
            </div>
            <div className="!list-disc">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {qa.a}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </ClientOnly>
  );
};

export default faq;
