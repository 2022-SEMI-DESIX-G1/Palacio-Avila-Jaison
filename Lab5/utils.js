(() => {
    const Utils = {
        methods: {
            // fibonacci: (number) => {
            //     const fubonachi = [];
            //     for(let i = 1; i <= number; i++){
            //         fubonachi.push(i);
            //     }
            //     return fubonachi;
            // }

            fibonacci: (number) => {
                const fibonacci = [];

                fibonacci[0] = 0;
                fibonacci[1] = 1;
        
                for (var i = 2; i < number; i++) {
                  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
                return fibonacci;
            }
        }
    }
    document.Utils = Utils;
})();