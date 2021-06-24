---
title: Health and Safety Form 
hide_title: false
sections:
  - section_id: HealthandSafetyForm
    type: section_form
    content: >-
      In preparation for your stay at 1263 Barclay Street Vancouver. Please
      fill the COVID Questionnaire form below.
    form_id: HealthandSafetyForm
    form_action: /StrataThanks
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
