function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let newArr = JSON.parse(document.querySelector('#inputs textarea').value);
       let topRestaurant = findTopRestaurant(newArr);
       document.querySelector('#bestRestaurant>p').textContent = getMsgRest(topRestaurant);
       document.querySelector('#workers>p').textContent = getMsgEmp(topRestaurant.workers);
   }

   function getMsgRest(objWinner) {
       return `Name: ${objWinner.name} Average Salary: ${objWinner.avgSalary.toFixed(2)} Best Salary: ${objWinner.maxSalary.toFixed(2)}`;
   }

   function getMsgEmp(workers) {
       return workers.map(w => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
   }

   function findTopRestaurant(arr) {
       let result = arr.reduce((acc, e) => {
           let [restaurant, ...workers] = e.split(/(?: - )|(?:, )/g);
           workers = workers.map(w => {
               let [worker, salary] = w.split(' ');
               return {
                   worker: worker,
                   salary: +salary
               };
           });
           let found = acc.find(r => r.name === restaurant);
           if (found) {
               found.workers = found.workers.concat(workers);
           } else {
               acc.push({
                   name: restaurant,
                   workers: workers
               });
           }
           return acc;
       }, []);

       result.forEach((el, idx) => {
           el.inputOrder = idx;
           el.avgSalary = el.workers.reduce((acc, el) => acc + el.salary, 0) / el.workers.length;
           el.maxSalary = Math.max(...el.workers.map(w => w.salary));
       });

       result.sort((a, b) => b.avgSalary - a.avgSalary || a.inputOrder - b.inputOrder);
       let bestRestaurant = result[0];
       bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

       return bestRestaurant;
   }
}
