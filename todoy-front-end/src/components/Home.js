import NavBar from './NavBar';
import Item from './Item';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Item title="Bathroom cleaning" category="Household work" state="Pending" />
                <Item title="Bathroom cleaning" category="Household work" state="Pending" />  
            </div>
        </>
    );
}

export default Home;