//Google Analytic ID
const trackGAID = process.env.REACT_APP_GA_TRACKING_ID;

if (!trackGAID) {
    console.error("ERROR: REACT_APP_GA_TRACKING_ID google analytic id is not as environment variable ")

    process.exit(1);
}
else {
    console.info('INFO: REACT_APP_GA_TRACKING_ID = {trackGAID}')
}
