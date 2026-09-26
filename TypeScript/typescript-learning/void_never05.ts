// void
// Usually functions that don't return anything:

function logMessage(message: string): void {
    console.log(message);

}

logMessage("Hello World");

// never
// Functions that never return successfully:

function neverReturn(): never {
    throw new Error("This function never returns");
}

neverReturn();
