import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // This pulls the 'name' from the OutSystems URL parameter
    const name = req.query.name || "Guest";

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: { 
            greeting: `Hello ${name} from Mudra Bridge!`,
            status: "Success",
            timestamp: new Date().toISOString()
        }
    };
};

export default httpTrigger;
