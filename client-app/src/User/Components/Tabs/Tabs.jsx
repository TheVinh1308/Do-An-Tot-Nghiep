import Commnent from "../Comment/Comment";
import Config from "../Config/Config";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";
import "./Tabs.css"
const Tabs = ({selectedPhone,isAuthenticated,userId,userName}) => {
  return (
    <>
      <div className="page">
        <h1>Một số thông tin khác</h1>
        {/* tabs */}
        <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1">
          <input
            type="radio"
            name="pcss3t"
            defaultChecked
            id="tab1"
            className="tab-content-first"
          />
          <label htmlFor="tab1">
            <i className="icon-bolt" />
            Hỏi đáp
          </label>
          <input
            type="radio"
            name="pcss3t"
            id="tab2"
            className="tab-content-2"
          />
          <label htmlFor="tab2">
            <i className="icon-picture" />
              Đánh giá
          </label>
          <input
            type="radio"
            name="pcss3t"
            id="tab3"
            className="tab-content-3"
          />
          <label htmlFor="tab3">
            <i className="icon-cogs" />
            Cấu hình
          </label>
          <input
            type="radio"
            name="pcss3t"
            id="tab5"
            className="tab-content-last"
          />
          {/* <label htmlFor="tab5">
            <i className="icon-globe" />
            Newton
          </label> */}
          <ul>
            <li className="tab-content tab-content-first typography">
                <Commnent selectedPhone={selectedPhone} isAuthenticated={isAuthenticated} userId={userId} userName={userName}/>
            </li>
            <li className="tab-content tab-content-2 typography">
                <ReviewDisplay selectedPhone={selectedPhone} isAuthenticated={isAuthenticated} userId={userId} userName={userName}/>
            </li>
            <li className="tab-content tab-content-3 typography">
              <Config selectedPhone={selectedPhone} />
            </li>
            {/* <li className="tab-content tab-content-last typography">
                
            </li> */}
          </ul>
        </div>
        {/*/ tabs */}
      </div>
    </>
  );
};

export default Tabs;
