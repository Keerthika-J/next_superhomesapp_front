
import FixedMenu from '../FixedMenu/FixedMenu';
import Drawers from '../../Drawers';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function SinglePortfolio() {
    const [Data, setData] = useState([]);
    const { slugs } = useParams();

    useEffect(() => {
        fetch(`https://www.superhomes.co/admin/public/api/latest-projects/${slugs}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                
            })
    }, [Data, temp]);
    
    return (
        <>
            <Helmet>
                <title>{Data.portfolioTitle}</title>
                <meta name="og:url" content={`https://superhomes.co/${slugs}`} />
                <meta name="description" content={Data.metaDesc}></meta>
                <meta name="keywords" content={Data.keywords}></meta>
            </Helmet>

        </>
    );
}
export default SinglePortfolio;
