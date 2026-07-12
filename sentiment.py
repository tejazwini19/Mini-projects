from textblob import TextBlob;

while True:
    text = input("Enter a sentence (or type 'exit' to quit): ")
    if text.lower() == 'exit':
        break
    blob = TextBlob(text)
    score = blob.sentiment.polarity
    if score > 0.25:
        label = "Positive"
    elif score < -0.25:
        label = "Negative"
    else:
        label = "Neutral"
    print(f"Result: {label}")
    print(f"Score: {score:.2f}")