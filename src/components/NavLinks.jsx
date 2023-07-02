import { useGlobalContext } from '../context'
import sublinks from '../data'
const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className="nav-links">
      {sublinks.map((sublink) => {
        return (
          <button
            className="nav-link"
            type="button"
            onMouseEnter={() => setPageId(sublink.pageId)}
            key={sublink.pageId}
          >
            {sublink.page}
          </button>
        )
      })}
    </div>
  )
}
export default NavLinks
