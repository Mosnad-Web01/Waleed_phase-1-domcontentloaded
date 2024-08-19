document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector("p");
  paragraph.textContent = "This is really cool!";
});
describe("index.js", () => {
  it("should change the text on the page when DOM content has loaded", function (done) {
    // Check the initial text content before DOMContentLoaded
    expect(document.querySelector("p").textContent).to.equal(
      "JavaScript is so cool. It lets me add text to my page programmatically."
    );

    // Create and dispatch the DOMContentLoaded event
    const event = new Event("DOMContentLoaded");
    window.document.dispatchEvent(event);

    // Use setTimeout to wait for any asynchronous operations
    setTimeout(() => {
      // Check the updated text content after the event
      expect(document.querySelector("p").textContent).to.equal(
        "This is really cool!"
      );
      done(); // Call done to indicate the test has finished
    }, 0);
  });
});
