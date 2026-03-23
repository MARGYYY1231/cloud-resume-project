import logging
import azure.functions as func
from azure.data.tables import TableServiceClient, EntityProperty
import os
import json

app = func.FunctionApp()  # single-file functions

@app.function_name(name="GetCounter")
@app.route(route="GetCounter", methods=["GET"], auth_level=func.AuthLevel.ANONYMOUS)
def main(req: func.HttpRequest) -> func.HttpResponse:

    conn_str = os.environ["AzureWebJobsStorage"]
    table_service = TableServiceClient.from_connection_string(conn_str)
    table_client = table_service.get_table_client("ResumeCounter")

    # Try to get the entity
    try:
        entity = table_client.get_entity(partition_key="counter", row_key="1")
    except Exception:
        # If it doesn't exist, create it
        entity = {"PartitionKey": "counter", "RowKey": "1", "views": 0}
        table_client.create_entity(entity)

    # Extract the integer value safely
    views_value = entity["views"].value if isinstance(entity["views"], EntityProperty) else entity["views"]
    entity["views"] = int(views_value) + 1

    # Update the entity
    table_client.update_entity(entity)

    return func.HttpResponse(
        json.dumps({"views": entity["views"]}),
        mimetype="application/json"
    )