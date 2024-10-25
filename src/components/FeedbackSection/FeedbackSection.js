import React from "react";

function FeedbackSection() {
  return (
    <section id="feedback" className="section min-height">
      <div className="container">
        <h2 className="text-center">Feedback</h2>
        <form>
          <div class="mb-3">
            <label for="feedbackName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="feedbackName"
              name="feedbackName"
              required
            />
          </div>
          <div class="mb-3">
            <label for="feedback" class="form-label">
              Your Feedback
            </label>
            <textarea
              class="form-control"
              id="feedback"
              name="feedback"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}

export default FeedbackSection;
