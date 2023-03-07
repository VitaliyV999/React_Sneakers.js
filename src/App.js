import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useState} from "react";

const arr = [
    {
        title: 'Nike Air Max 270',
        price: '49$',
        imageUrl: '/img/sneakers/1.jpg'
    },
    {
        title: 'Nike Blazer Mid Suede',
        price: '73$',
        imageUrl: '/img/sneakers/2.jpg'
    },
    {
        title: 'Puma X Aka Boku',
        price: '88$',
        imageUrl: '/img/sneakers/3.jpg'
    },
    {
        title: 'Nike LeBron XVIII',
        price: '125$',
        imageUrl: '/img/sneakers/7.jpg'
    },
]

function App() {
    const [cartOpened, setCartOpened] = useState(false)
    return (
        <div className="wrapper clear">
            {cartOpened ? <Drawer onClickCart ={() => setCartOpened(false)} /> : null}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex">
                    {arr.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                onClickFavourite={() => console.log('added to fav')}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
