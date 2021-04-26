import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper() {
  return (
    <>
      <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <TopBar />
          <ContentRowTop />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContentWrapper;