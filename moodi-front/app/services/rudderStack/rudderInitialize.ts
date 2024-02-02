import * as rudderanalytics from "rudder-sdk-js";

export async function rudderInitialize() {
  rudderanalytics.load(
    "2bVfHSkYQsKBnF6bZbp2yIe7fyw",
    "https://fractalserxbrj.dataplane.rudderstack.com"
  );
  rudderanalytics.ready(() => {
    console.log("we are all set!!!");
  });
}
