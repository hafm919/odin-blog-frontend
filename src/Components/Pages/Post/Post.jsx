import CommentSection from "./CommentSection";

function Post() {
  return (
    <article className="md:px-[25%] py-6 flex flex-col gap-3">
      <header className="flex flex-col gap-2">
        <h1 className="font-sans text-2xl font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing{" "}
        </h1>
        <div className="flex gap-2 text-gray-400">
          <h4 className="text-sm font-sans">Hafeez Mohammed</h4>
          <h4 className="text-sm font-sans">12th August 2024</h4>
        </div>
      </header>
      <img
        className="object-coverw-full rounded-md"
        src="https://images.pexels.com/photos/30006377/pexels-photo-30006377/free-photo-of-grytviken-harbor-with-snowy-mountain-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ></img>
      <p className="font-serif">
        Technology has significantly transformed the modern workplace,
        redefining how businesses operate and employees interact. From
        streamlining processes to fostering collaboration across geographies,
        technological advancements have touched every aspect of work.
      </p>
      <p className="font-serif">
        One major area of impact is automation. Machines and software have taken
        over repetitive and mundane tasks, allowing employees to focus on
        strategic and creative roles. Tools such as customer relationship
        management (CRM) systems, project management platforms, and enterprise
        resource planning (ERP) software have simplified complex processes,
        reducing human error and improving efficiency.
      </p>
      <p className="font-serif">
        Another key development is the rise of remote work. Technologies like
        video conferencing, cloud storage, and collaboration tools have made it
        easier for teams to work from anywhere. This has not only improved
        work-life balance for employees but also enabled companies to tap into
        global talent pools.
      </p>
      <CommentSection></CommentSection>
    </article>
  );
}
export default Post;
