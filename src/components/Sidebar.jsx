import { useGlobalContext } from '../context'
import sublinks from '../data'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" type="button" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((sublink) => {
          const { links, pageId, page } = sublink
          return (
            <article className="sidebar-article" key={pageId}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links.map((link) => {
                  const { id, label, icon, url } = link
                  return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </aside>
  )
}
export default Sidebar
