export function setupErrorHandler(app) {
  app.config.errorHandler = function (err) {
    console.log(`app.config.errorHandler::>>`, err);
  };
}
