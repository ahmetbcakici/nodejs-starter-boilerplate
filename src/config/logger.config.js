import pino from "pino"

const pinoLogger = pino({
  level: "debug",
  prettyPrint: {
    colorize: true,
    levelFirst: true,
    messageFormat: false,
    translateTime: 'dd-mm-yy HH:MM:ss.l',
    //search: 'foo == `bar`', // --search
    ignore: 'pid,hostname' // --ignore,
  },
  serializers: {
    res(res) {
      // the default
      return {
        //res,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage
      }
    },
    req(req) {
      return {
        method: req.method,
        url: req.url,
        path: req.path,
        // parameters: req.parameters,
        // Including the body and headers in the log could be in violation 
        // of privacy laws, e.g. GDPR. You should use the "redact" option to
        // remove sensitive fields. It could also leak authentication data in
        // the logs.
        body: req.body,
        //headers: req.headers
        //apikey: req.headers.apikey,
        //token: req.headers.token
      }
    }
  }
})

const logger = pinoLogger
export default logger 
