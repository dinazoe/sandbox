
def verify_data(file_path):
    # create the data.json if it doesn't exist
    import os, json
    if not os.path.exists(file_path):
        questions = {"question": []}
        with open(file_path, "w") as file:
            file.write(json.dumps(questions))