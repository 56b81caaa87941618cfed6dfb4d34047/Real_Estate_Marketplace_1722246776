/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722246832", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                    <h1 class="text-4xl font-bold mb-8 text-center text-purple-600 dark:text-white">Sarthak Rastogi</h1>

                    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 px-4 text-center">
                        Large Language Models (LLMs) are advanced AI systems trained on vast amounts of text data. They use deep learning techniques to understand and generate human-like text. LLMs process input by breaking it down into tokens, analyzing patterns, and predicting the most likely next words or responses based on their training. This allows them to perform tasks like translation, summarization, and answering questions with remarkable fluency and contextual understanding.
                    </p>

                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
