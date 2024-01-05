import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import style from "./style.module.css";


TVShowAPI.fetchPopulars()

export function App() {
  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <input style={{width:"100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>detail</div>
      <div className={style.recommandations}>recommandations</div>
    </div>
  );
}
