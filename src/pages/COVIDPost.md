---
title: COVID Post Departure checklist 
hide_title: false
sections:
  - section_id: COVID-post
    type: section_form
    content: >-
      Now that your guest has departed here's a checklist that you can use to ensure that the suite has been cleaned completely.
    form_id: COVIDPost
    form_action: /CoQthank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I have completed this form to the best of my knowledge and believing the answers to be truthful.
    submit_label: Send Message
template: advanced
---
