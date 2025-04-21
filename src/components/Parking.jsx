export default function ParkingComponent() {
    return (
        <div
            id="parking"
            style={{ backgroundColor: "pink", margin: 50, padding: 30 }}
        >
            <h3 style={{ fontSize: 20 }}>
                開車自行前往的貴賓，宴客地點附近有三個停車點如下：
            </h3>
            <br />
            <ol style={{ fontSize: 15 }}>
                <li>本身場館有戶外免費停車位（此處位置不多，請見諒）</li>
                <li>場館斜對面故宮博物館有收費停車位（此處有提供接駁車到會場）</li>
                <li>至善國中的路邊停車（至善國中門前有提供接駁車到會場）</li>
            </ol>
            <br />
            <p style={{ fontSize: 15 }}>如有疑問請聯繫場館，謝謝您的配合。</p>
            <p style={{ fontSize: 15 }}>電話：02-2841-1996</p>
            <br />
            <img src="images/3.png" style={{ width: "100%" }} alt="parking" />
        </div>
    );
}
