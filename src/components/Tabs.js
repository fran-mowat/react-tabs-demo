import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')}>Tab 1</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')}>Tab 2</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')}>Tab 3</button>
                </li>
            </ul>
            <div className="tab-content mt-3">
                {activeTab === 'tab1' && <div>Content for Tab 1</div>}
                {activeTab === 'tab2' && <div>Content for Tab 2</div>}
                {activeTab === 'tab3' && <div>Content for Tab 3</div>}
            </div>
        </div>
    );
};

export default Tabs;