import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon-prime-badge" />
            </div>

            <div className="home_row">
                <Product
                    id="1348762344"
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class"
                    price={332}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
                />
                <Product
                    id="873297424704"
                    title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
                    price={399}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg" />
            </div>
            <div className="home_row">
                <Product
                    id="979727400407"
                    title="OnePlus 9 Pro Morning Mist"
                    price={69999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81knqIxxBPL._AC_SL1500_.jpg"
                />
                <Product
                    id="8474957457"
                    title="New Apple iPhone 12 Pro Max"
                    price={133990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
                />
                <Product
                    id="7598472332"
                    title="SAMSUNG Galaxy S21+ Plus"
                    price={71999}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61GCKHqbcxL._AC_SL1000_.jpg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="7832429847"
                    title="OnePlus TV U Series 55 U1 Imagination & Intelligence"
                    price={19999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jv5i4cRKS._SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="564464646464"
                    title="2020 Apple MacBook Pro-space grey"
                    price={99999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SL1500_.jpg"
                />
                <Product
                    id="792654041013"
                    title="
                    2020 Apple MacBook Air-silver"
                    price={92999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
                />
                <Product
                    id="011654615464"
                    title="2019 Apple MacBook Pro - Space grey"
                    price={122999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                />
                <Product
                    id="328056416545"
                    title="
                    Apple MacBook Air-Silver"
                    price={89999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
