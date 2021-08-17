export default function responseCreator(
    responseObject, 
    { 
        statusCode = 200, 
        success = true, 
        data = {} 
    }
) {
    responseObject
        .status(statusCode)
        .json({ 
            success, 
            data, 
            dataType: typeof data 
        });
}