import './App.css';
import Accordian from './components/accordian'
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import menus from './components/Treeview/Data';
import TreeView from './components/Treeview';

function App() {
    return (
        <div className="App">
            <Accordian />
            <RandomColor />
            <StarRating />
            <ImageSlider url={"https://picsum.photos/v2/list"}/>
            <TreeView menus={menus}/>
            <LoadMoreData />
        </div>
    )
}
export default App;