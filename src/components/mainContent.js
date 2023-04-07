export default function MainContent() {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          How It Works
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Step 1:
            </h3>
            <p className="text-gray-600 mb-4">
              Choose in the app a form you need to fill up by clicking on one of
              the forms or by using the search function. If a form is not yet in
              our database, take a picture of the form and upload using the
              steps provided
            </p>
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Step 2:
            </h3>
            <p className="text-gray-600 mb-4">
              App will display the form prefilled with info saved from your
              previously filled forms. We estimate that after filling out 3
              forms most of the data required by most forms will already be
              saved in the app.
            </p>
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Step 3:
            </h3>
            <p className="text-gray-600 mb-4">Fill up the missing data.</p>
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Step 4:
            </h3>
            <p className="text-gray-600 mb-4">
              App will ask you to review the form for accuracy and completeness
            </p>
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Step 5:
            </h3>
            <p className="text-gray-600 mb-4">
              App will submit form for you digitally, or will give instructions
              on how to submit digitally. For paper forms or digital forms that
              are required to be submitted in paper form, Quickerforms will
              provide you a pdf of the filled application form that can be
              printed along with detailed instructions on the submission process
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="laptop.jpg" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="robot.png" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Your data is safe!
              </h3>
              <p className="text-gray-600 mb-4">
                We keep your data safe by making it accessible and usable only
                by you and no one else, not even by us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
