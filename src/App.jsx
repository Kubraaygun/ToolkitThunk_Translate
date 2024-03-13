import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, translateText } from "./redux/actions/translateActions";
import Select from "react-select";

const App = () => {
  const dispatch = useDispatch();
  const languageSlice = useSelector((store) => store.languageSlice);
  const translateSlice = useSelector((store) => store.translateSlice);

  const [text, setText] = useState("");

  const [sourceLang, setSourceLang] = useState({
    value: "tr",
    label: "Turkish",
  });
  const [targetLang, setTargetLang] = useState({
    value: "en",
    label: "English",
  });
  // Api'dan dil verileri al ve store'a aktar

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  //diziyi bizden istenen formata cevirdik:
  //objelerin {code,name} keylerini {value,label}'a cevirdik

  //Buradaki map top-level kod oldugu icin bilesen her
  //render oldugunda hesaplama tekrar yapiliyordu. Gereksiz hesaplamalar projenin hizini yavaslatabileceginden useMEMO kullanip bu sorunun onune gectik.

  const data = useMemo(
    () =>
      languageSlice.languages.map((i) => ({
        value: i.code,
        label: i.name,
      })),
    [languageSlice.languages]
  );

  return (
    <div id="main-page">
      <div className="container">
        <h1>Ceviri+</h1>
        {/* Ust Kisim */}
        <div className="upper">
          <Select
            value={sourceLang}
            onChange={setSourceLang}
            className="select"
            options={data}
          />
          <button>Degis</button>
          <Select
            value={targetLang}
            onChange={setTargetLang}
            className="select"
            options={data}
          />
        </div>
        {/*Orta Kisim */}
        <div className="middle">
          <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>

          <div>
            <textarea disabled value={translateSlice.answer} />
          </div>
        </div>
        {/*Alt Kisim */}
        <button
          onClick={() =>
            dispatch(translateText({ text, sourceLang, targetLang }))
          }
        >
          cevir
        </button>
      </div>
    </div>
  );
};

export default App;
