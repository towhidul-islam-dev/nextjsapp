import {useRouter} from 'next/router';
const Review = () => {
    const router = useRouter();
    const {productId,reviewId} = router.query;
    return ( 
        <div>
            <h2>Review Page {reviewId} and Product page{productId}</h2>
        </div>
     );
}
 
export default Review;