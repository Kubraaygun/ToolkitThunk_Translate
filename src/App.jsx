import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "./redux/actions/translateActions";
import Select from "react-select";

const App = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.translateSlice);
  // Api'dan dil verileri al ve store'a aktar

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  //diziyi bizden istenen formata cevirdik:
  //objelerin {code,name} keylerini {value,label}'a cevirdik

  const data = state.languages.map((i) => ({
    value: i.code,
    label: i.name,
  }));

  return (
    <div id="main-page">
      <div className="container">
        <h1>Ceviri+</h1>
        {/* Ust Kisim */}
        <div className="upper">
          <Select className="select" options={data} />
          <button>Degis</button>
          <Select className="select" options={data} />
        </div>
        {/*Orta Kisim */}
        <div className="middle">
          <div>
            <textarea />
          </div>

          <div>
            <textarea disabled />
          </div>
        </div>
        {/*Alt Kisim */}
        <button>cevir</button>
      </div>
    </div>
  );
};

export default App;
