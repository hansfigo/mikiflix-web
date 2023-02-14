import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const AnimeCardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map(items => (
            <div className="flex mr-4">
                <Skeleton width={180} height={260} />
            </div>
        )

        ))

}
export default AnimeCardSkeleton;
