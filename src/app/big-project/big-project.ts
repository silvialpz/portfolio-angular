import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-project',
  imports: [CommonModule],
  template: `
    <div class="m-16">
      <div class="bg-[#265F5B]
              h-auto min-h-[60vh] md:h-[70vh] lg:h-[80vh]
              flex flex-col md:flex-row
              items-center
              rounded-xl overflow-hidden inset-shadow-sm inset-shadow-indigo-950/50
              mx-auto max-w-7xl">
        <div class="w-full md:w-2/5
                    p-8 md:p-12 lg:pl-20 lg:pr-0
                    flex flex-col items-center md:items-start
                    justify-center
                    text-center md:text-left">
          <h2 class="text-violet-50 text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-nowrap">UofT Code Buddy</h2>
          <p class="text-violet-100 text-lg md:text-xl/snug mb-6 sans-serif-subtitle-text lg:pr-20">AI extension provides plagiarism-free tutoring feedback to programming students </p>

          <a (click)="toggleModal()"
            class="bg-amber-300 mt-5 px-8 py-3 rounded-full text-center font-semibold text-gray-800 hover:bg-amber-400 transition-colors duration-200 w-fit">
            Learn More
          </a>
        </div>

        <div
          class="bg-[url(/assets/capstone-mockup.png)]
              w-full md:w-3/5
              h-[40vh] md:h-full
              bg-contain bg-center bg-no-repeat">
        </div>
      </div>
    </div>

    <div *ngIf="isModalVisible" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-[#0e3532]/90 backdrop-blur-sm" (click)="toggleModal()"></div>

      <div class="relative bg-[#1a4744] text-violet-50 serif-text text-lg/5 rounded-lg shadow-xl p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
        <div class="flex justify-end items-center mb-4">
          <button class="text-violet-50 hover:text-red-300 text-3xl font-light" (click)="toggleModal()">&times;</button>
        </div>

        <p>UofT Code Buddy is a Visual Studio Code extension that utilizes LLMs for natural language processing to provide immediate tutoring feedback to students who are learning to program in C. The extension aims to make the process of learning to code in C more engaging by providing insights and interactive support while adhering to academic integrity. That is, the extension will not provide any code or solutions, only guidance.</p>
        <img src="/assets/codebuddy.gif" alt="UofT Code Buddy VS Code Extension" class="py-6">
        
          <a href="https://marketplace.visualstudio.com/items?itemName=UofTCodeBuddy.uoft-code-buddy" class=" bg-sky-800 hover:text-red-300 rounded-full p-2 flex justify-center items-center" target="_blank">
            <img src="/assets/vs-code.png" alt="VS Code icon" class="size-8 mx-2">
            <p class="sans-serif-subtitle-text text-sm">Install in VS Code!</p>
          </a>
        

        <h2 class="sans-serif-label-text py-6 pt-15">System Level Overview</h2>

        <div class="flex flex-col sans-serif-small-text text-xs/4">
          <img src="/assets/codebuddy-gui.png" alt="Screenshot of CodeBuddy GUI">
          <p>Code Buddy on the VS Code Side Panel.</p>
          <p>(a) Compile errors button. (b) Runtime errors button. (c) Check Logic Errors feature.</p>
        </div>
        
        <p class="py-5">The extension can be accessed on VS Code’s side panel. Once the user has installed gcc and cppcheck in their path, it will be ready to work on the C file currently open in the editor window. It can handle the three main types of programming errors: compilation errors, runtime errors, and logical errors. The screen above shows how that functionality is reflected on the UI. Below is a block diagram of the system overview with the user input in green and the three error pipelines described in this section in light blue boxes.</p>
        <img src="/assets/codebuddy-block.png" alt="Code Buddy Block Diagram" class="my-4">
        
        <h2 class="sans-serif-label-text pt-6 pb-2">Workflow</h2>
        <div class="flex flex-1 justify-center sans-serif-small-text text-xs/4 py-5">
          <div class="flex flex-col justify-between" class="w-1/3 pr-1">
            <img src="/assets/workflow1.png" alt="Checking Compile TIme Errors">
            <p>Initial list of compile errors</p>
          </div>
          <div class="flex flex-1 flex-col justify-between" class="w-1/3">
            <img src="/assets/workflow2.png" alt="Explanation of error">
            <p>Contextualized explanation of the first compile error.</p>
          </div>
          <div class="flex flex-1 flex-col justify-between" class="w-1/3 pl-1">
            <img src="/assets/workflow3.png" alt="All Errors Fixed">
            <p>No compilation errors found, all errors fixed.</p>
          </div>
        </div>
        <p class="py-2">A user trying to debug their own program would be expected to fix their compilation errors first. The extension would guide the user with the workflow shown in below. After clicking the “Check Compile Errors” button, if compilation fails, the errors will be displayed. The ‘?’ button in each error box is to get a contextualized explanation. Once the button is pressed, Code Buddy sends a customized compile time error prompt to chatGPT. Once all errors have been fixed, the extension will report that there are no compilation errors. </p>
        <p class="py-2">The second step in the debugging process would be to address the runtime errors. The workflow for fixing runtime errors is very similar to the compile errors workflow above. After clicking the “Check Runtime Errors” button, if the static code analyzer reports any errors, they will be displayed in error boxes. The ‘?’ button in each error box is to get a contextualized explanation for the corresponding error.</p>
        <p class="py-2">Finally, the extension can help the user work through logical errors. The workflow for finding and explaining logical errors is different in that it requires the user to be more analytical. The user can highlight snippets of code that they think might contain logical errors, right-click, and select 'Check Logic Errors' in the context menu. Code Buddy internally scrubs any of the user’s comments before prompting chatGPT.  In the case that the code snippet does seem to contain a logical error, the extension will ask the programmer critical questions that could guide and point them toward the solution (see below).</p>
        <div class="flex flex-col sans-serif-small-text text-xs/4 py-5">
          <img src="/assets/logic-errors.png" alt="Logic error explanation">
          <p>Code Buddy explaining logic errors in the highlighted code snippet.</p>
        </div>
        
        

        <h3 class="sans-serif-label-text">Links and Mentions</h3>
        <div class="py-2">
          <h3 class="font-bold">Collaborators:</h3>
          <a href="https://www.linkedin.com/in/aric-leather-2a2a7a19b/" target="_blank" class="hover:text-red-300">Aric Leather</a>
          <a href="https://www.linkedin.com/in/jeniferhossain/" target="_blank" class="pl-5 hover:text-red-300">Jen Hossain</a>
        </div>
        <a href="https://github.com/silvialpz/ece496-code-helper" target="_blank" class="hover:text-teal-200">UofT CodeBuddy Github Resository</a>

      </div>
    </div>
  `,
  styleUrl: './big-project.css'
})
export class BigProjectComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = 'My Capstone Project Title';
  @Input() description: string = 'A brief, compelling description of your capstone project.';
  @Input() tools: string[] = [];
  @Input() learnMoreLink: string = '#';

  // State to track if the modal is open
  isModalVisible: boolean = false;

  // Method to toggle the modal's visibility
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}