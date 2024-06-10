const path = require('path');
const fs = require('node:fs/promises');

const pathToData = path.join(path.dirname(__filename), 'jobs.json');

/**
 * Service that handles the data
 */
class Service {

    /**
     * Get the data from the DB
     * @returns {Promise<FindingOnResource[]>}
     */
    async getData() {
        await this.timeout(1000)
        const string = await fs.readFile(pathToData, { encoding: 'utf-8' });
        return JSON.parse(string);
    }
    /**
     * write data to DB
     * @returns {Promise<FindingOnResource[]>}
     */
    async writeData(data){
        await fs.writeFile(pathToData, JSON.stringify(data, null, 2));
    }



    /**
     * Method to simulate real DB query
     * @param {number} ms - number of milliseconds to wait
     */
    async timeout(ms) {
        return new Promise(((res,rej)=>{
            setTimeout(()=>res(),ms)
        }))
    }
}

module.exports = Service;