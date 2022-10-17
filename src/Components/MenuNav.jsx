import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Cakes from './Cakes';
import Pizza from './Pizza';

const MenuNav = () => {



    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <>
            <div className="MenuNav">
                <div className="container">
                    <div className="row">
                        <div className="col-3 menu_nav_prods">
                            <Nav tabs >
                                <div className="menu_nav_box">
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                                            <div className="menu_nav_a ">Все</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                                            <div className="menu_nav_a">Торты</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                                            <div className="menu_nav_a">Пироженой </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                                            <div className="menu_nav_a">Cладости</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '5' })} onClick={() => { toggle('5'); }}>
                                            <div className="menu_nav_a">Закуски</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '6' })} onClick={() => { toggle('6'); }}>
                                            <div className="menu_nav_a">Десерты</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '7' })} onClick={() => { toggle('7'); }}>
                                            <div className="menu_nav_a">Бар</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '8' })} onClick={() => { toggle('8'); }}>
                                            <div className="menu_nav_a">Салаты</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '9' })} onClick={() => { toggle('9'); }}>
                                            <div className="menu_nav_a">Напитки</div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: activeTab === '10' })} onClick={() => { toggle('10'); }}>
                                            <div className="menu_nav_a">Прочие</div>
                                        </NavLink>
                                    </NavItem>
                                </div>
                            </Nav>
                        </div>
                        <div className="col-9">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <Row className='myRow'>
                                        <Cakes />
                                    </Row>
                                </TabPane>
                            </TabContent>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="2" className=''>
                                    <Row className='myRow'>
                                        <Pizza />
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuNav