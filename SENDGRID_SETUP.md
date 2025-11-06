# SendGrid Custom Fields Setup

This document provides instructions for setting up the required custom fields in SendGrid to capture user data from both the waitlist modal and investor modal.

## Required Custom Fields

You need to create the following custom fields in your SendGrid account:

### 1. Navigate to SendGrid Custom Fields
1. Log in to [SendGrid](https://app.sendgrid.com/)
2. Go to **Marketing** > **Field Definitions** > **Custom Fields**
3. Click **Create New Field** for each field below

### 2. Create Interests Custom Field

Create this **1 text** custom field to store all user interests:

| Field Name | Field ID | Type | Description |
|------------|----------|------|-------------|
| Interests | `interests` | Text | Comma-separated list of user interests |

### 3. Verify Existing Custom Fields

The waitlist form also uses these existing custom fields (should already be created):

| Field Name | Field ID | Type | Description |
|------------|----------|------|-------------|
| Signup Date | `signup_date` | Date | When the user signed up |
| Source | `source` | Text | Where the user signed up from (e.g., "website") |

## Field Creation Instructions

To create the interests field:

1. Click **Create New Field**
2. **Field Name**: Enter "Interests"
3. **Custom Field ID**: Enter `interests`
   - ⚠️ **IMPORTANT**: The Field ID must match exactly (case-sensitive)
4. **Field Type**: Select **Text**
5. Click **Save**

## How It Works

When a user joins the waitlist:

1. **Step 1**: User selects their interests from the modal
2. **Step 2**: User enters their name and email
3. **Submit**: The API sends the data to SendGrid with interests marked as `true` or `false`

Example payload to SendGrid:
```json
{
  "contacts": [
    {
      "email": "user@example.com",
      "first_name": "John",
      "custom_fields": {
        "signup_date": "2025-11-03T12:00:00.000Z",
        "source": "website",
        "interests": "ai_video_logging, ai_form_analysis, fitness_social"
      }
    }
  ]
}
```

The `interests` field will contain a comma-separated string of the selected interest IDs.

## Using Interest Data

Once set up, you can:

1. **Segment your list** - Filter contacts whose `interests` field contains specific values (e.g., contains "ai_form_analysis")
2. **Personalize emails** - Send targeted content based on user interests
3. **Analyze demand** - Export contacts and analyze which features are most popular
4. **Prioritize development** - Build features users care about most

### Interest ID Reference

When filtering/searching, use these IDs:
- `ai_video_logging` - AI Video Logging
- `ai_form_analysis` - AI Form Analysis
- `simple_video_logging` - Simple Video Logging
- `fitness_social` - Fitness Social Network
- `competitions` - Friendly Competitions

## Verification

To verify the field is working:

1. Test the waitlist signup flow on your website
2. Go to **Marketing** > **Contacts**
3. Find the test contact
4. Check that the `interests` field shows a comma-separated list of selected interests (e.g., "ai_video_logging, fitness_social")

## Troubleshooting

**Issue**: Contact is created but interests field is empty

**Solution**:
- Verify the custom field ID is exactly `interests` (case-sensitive, lowercase)
- Check that you created a **Text** type field
- Ensure your SendGrid API key has permission to update custom fields

**Issue**: Getting "invalid custom field" error

**Solution**:
- The field ID in the code must match the field ID in SendGrid exactly
- Make sure you used `interests` (lowercase, plural)
- Wait a few minutes after creating the field for SendGrid to sync

## Support

For SendGrid-specific issues:
- [SendGrid Custom Fields Documentation](https://docs.sendgrid.com/ui/managing-contacts/custom-fields)
- [SendGrid Support](https://support.sendgrid.com/)

---

# Investor List Setup

## Creating the Investors List

In addition to the "Waitlist" list for beta users, you need to create a separate "Investors" list for investor leads.

### Steps to Create Investors List

1. Log in to [SendGrid](https://app.sendgrid.com/)
2. Go to **Marketing** > **Contacts** > **Lists**
3. Click **Create List**
4. **List Name**: Enter "Investors"
5. Click **Create**

## Required Custom Fields for Investors

The investor modal uses the following custom fields:

| Field Name | Field ID | Type | Description |
|------------|----------|------|-------------|
| Investor Type | `investor_type` | Text | Type of investor (vc, operator, influencer, other) |
| Investment Range | `investment_range` | Text | Investment range or "not specified" |
| Signup Date | `signup_date` | Date | When the investor signed up (reuses existing field) |
| Source | `source` | Text | Where the investor signed up from (reuses existing field) |

### Creating Investor-Specific Custom Fields

You need to create these **2 new text** custom fields:

#### 1. Investor Type Field

1. Click **Create New Field**
2. **Field Name**: Enter "Investor Type"
3. **Custom Field ID**: Enter `investor_type`
   - ⚠️ **IMPORTANT**: The Field ID must match exactly (case-sensitive)
4. **Field Type**: Select **Text**
5. Click **Save**

#### 2. Investment Range Field

1. Click **Create New Field**
2. **Field Name**: Enter "Investment Range"
3. **Custom Field ID**: Enter `investment_range`
   - ⚠️ **IMPORTANT**: The Field ID must match exactly (case-sensitive)
4. **Field Type**: Select **Text**
5. Click **Save**

## How It Works

When an investor submits the form:

1. **Step 1**: Investor selects their type (VC, operator, influencer, or other)
2. **Step 2**: Investor enters name, email, and optionally investment range
3. **Submit**: The API sends the data to SendGrid's "Investors" list

Example payload to SendGrid:
```json
{
  "contacts": [
    {
      "email": "investor@example.com",
      "first_name": "John",
      "last_name": "Smith",
      "custom_fields": {
        "signup_date": "2025-11-03T12:00:00.000Z",
        "source": "website",
        "investor_type": "vc",
        "investment_range": "$100K - $250K"
      }
    }
  ]
}
```

## Using Investor Data

Once set up, you can:

1. **Segment by investor type** - Filter contacts by `investor_type` field to send targeted emails:
   - VCs → Send pitch deck
   - Operators → Send product demo invite
   - Influencers → Send partnership proposal

2. **Prioritize by investment range** - Sort by `investment_range` to focus on larger potential investments first

3. **Track lead source** - All investor submissions have `source: "website"` to distinguish from other channels

4. **Export for CRM** - Export investor list to your CRM for follow-up tracking

### Investor Type Reference

When filtering/segmenting, use these values:
- `vc` - Venture Capital / Angel Investor
- `operator` - Fitness Industry Operator
- `influencer` - Fitness Influencer / Athlete
- `other` - Other

### Investment Range Reference

Possible values:
- `$10K - $25K`
- `$25K - $50K`
- `$50K - $100K`
- `$100K - $250K`
- `$250K+`
- `Prefer not to say`
- `not specified` (if investor didn't select a range)

## Verification

To verify the investor fields are working:

1. Test the investor signup flow on your website
2. Go to **Marketing** > **Contacts**
3. Search for the test contact email
4. Check that:
   - Contact is in the "Investors" list
   - `investor_type` shows the selected type (e.g., "vc")
   - `investment_range` shows the range or "not specified"

## Troubleshooting

**Issue**: Contact is created but investor-specific fields are empty

**Solution**:
- Verify the custom field IDs are exactly `investor_type` and `investment_range` (case-sensitive, lowercase, underscore)
- Check that you created **Text** type fields (not Number)
- Ensure your SendGrid API key has permission to update custom fields

**Issue**: Getting "invalid custom field" error

**Solution**:
- The field ID in the code must match the field ID in SendGrid exactly
- Make sure you used `investor_type` and `investment_range` (not "investorType" or "investment-range")
- Wait a few minutes after creating the field for SendGrid to sync
