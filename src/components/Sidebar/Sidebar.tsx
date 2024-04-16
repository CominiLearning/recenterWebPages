import "./Sidebar.scss";

interface SidebarProps {
  links: {
    title: string;
    link: string;
  }[];
}

export default function Sidebar({ links }: SidebarProps) {
  console.log(links);
  
  return (
    <div className="sidebar">
      <div className="sidebar__title">On this Page</div>
      <div className="sidebar__links">
        {links.map((link, index) => (
          <a href={`#${link.link}`} key={index}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
