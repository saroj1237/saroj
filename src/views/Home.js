import Hero from "../components/Hero"
import RecentPosts from '../components/RecentPosts'
import FeaturedWorks from '../components/FeaturedWorks';
const Home = () => {
    return <div style={homeStyle}>
        <Hero />
        <RecentPosts />
        <FeaturedWorks />
    </div>
}
const homeStyle = {
}
export default Home;