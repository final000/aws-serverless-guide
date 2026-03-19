import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)


def lambda_handler(event, context):
    """Hello World Lambda function.

    Parameters
    ----------
    event : dict
        API Gateway event payload
    context : object
        Lambda runtime context

    Returns
    -------
    dict
        API Gateway response with statusCode and body
    """
    logger.info("Received event: %s", json.dumps(event))

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
        },
        "body": json.dumps({
            "message": "Hello World!",
        }),
    }
