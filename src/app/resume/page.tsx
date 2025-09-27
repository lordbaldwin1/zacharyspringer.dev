import ProjectsHeader from "~/components/projects-header";

export default function ResumePage() {
  return (
    <>
      <ProjectsHeader title="résumé" description="here is my résumé in full." />
      <div className="animate-[fade-in-up_0.3s_ease-out_forwards]
         [@keyframes_fade-in-up:{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}]">
        <embed
          src="resume.pdf"
          type="application/pdf"
          className="h-[1150px] w-full rounded-md border-0"
        />
      </div>
    </>
  );
}
