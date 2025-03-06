import React from "react";
import Header from "../components/header/Header";
import CardProduct from "../components/CardProduct";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="product">
                <section className="product-list">
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                    <CardProduct image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title="React" price="200" id="1" />
                </section>
            </div>
        </div>
    )
}

export default Home;