import responseCreator from '../../utils/response-creator';

export default function handler(req, res) {
    const hostname = `${req.hostname}:${req.port}`;
    responseCreator(res, { 
        data: {
            plain: hostname,
            wss: 'wss://' + hostname,
            https: 'https://' + hostname,
        } 
    });  
}