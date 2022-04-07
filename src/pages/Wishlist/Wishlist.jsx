import WishlistCard from '../../components/Card/WishlistCard'
import EmptyPage from '../../components/EmptyPage'
import { useWishlist } from '../../contexts/WishlistContext'

export default function Wishlist() {

  const {wishlist} = useWishlist()

  return (
    <div className='page-body'>
      {wishlist?.length === 0? "" : <p className="wishlist-heading">Showing {wishlist.length} products</p>}
      <div className=' wishlist-container'>{wishlist?.length === 0? <EmptyPage text={"No favorites here!!"} icon={"heart_broken"}/> : wishlist.map(item => (
      <WishlistCard wishlistItem = {item} key={item._id}/>))}</div>
    </div>
  )
}
