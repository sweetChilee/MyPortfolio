import { useState } from "react";
import styles from "./Portfolio.module.css";
import SixmanCarousel from "../../component/portfolioPage/sixman/SixmanCarousel";
import SixmanPage from "../../component/portfolioPage/sixman/SixmanPage";

export default function Portfolio() {
  const [selectSixman, setSelectSixman] = useState(true);
  const [selectAllTo, setSelectAllTo] = useState(false);
  const [selectMySite, setSelectMySite] = useState(false);
  const [selectKiosk, setSelectKiosk] = useState(false);
  const [selectStopWatch, setSelectStopWatch] = useState(false);

  const selectedSixman = () => {
    setSelectSixman((prev) => !prev);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedAllTo = () => {
    setSelectSixman(false);
    setSelectAllTo((prev) => !prev);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedMySite = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite((prev) => !prev);
    setSelectKiosk(false);
    setSelectStopWatch(false);
  };
  const selectedKiosk = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk((prev) => !prev);
    setSelectStopWatch(false);
  };
  const selectedStopWatch = () => {
    setSelectSixman(false);
    setSelectAllTo(false);
    setSelectMySite(false);
    setSelectKiosk(false);
    setSelectStopWatch((prev) => !prev);
  };

  return (
    <div className={styles.container} id="Portfolio">
      <SixmanPage />
      <div className={styles.previewSelectContainer}>
        {/* sixman */}
        {selectSixman ? (
          <div className={styles.selectedFirstArea}>
            <div className={styles.selectedSixmanPrj}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.sixmanPrj} onClick={selectedSixman}></div>
          </div>
        )}
        {/* All To Us */}
        {selectAllTo ? (
          <div className={styles.selectedArea}>
            <div className={styles.selectedAllTo}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.allTo} onClick={selectedAllTo}></div>
          </div>
        )}
        {/* MyPortfolio */}
        {selectMySite ? (
          <div className={styles.selectedArea}>
            <div className={styles.selectedMySite}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.mySite} onClick={selectedMySite}></div>
          </div>
        )}
        {/* Kisok Main Prj */}
        {selectKiosk ? (
          <div className={styles.selectedArea}>
            <div className={styles.selectedKiosk}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.kiosk} onClick={selectedKiosk}></div>
          </div>
        )}
        {/* StopWatch */}
        {selectStopWatch ? (
          <div className={styles.selectedLastArea}>
            <div className={styles.selectedStopWatch}></div>
          </div>
        ) : (
          <div className={styles.area}>
            <div className={styles.stopWatch} onClick={selectedStopWatch}></div>
          </div>
        )}
      </div>
    </div>
  );
}
