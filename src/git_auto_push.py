import os
import subprocess

def run_command(command):
    """Run a shell command and return output or error."""
    try:
        result = subprocess.run(command, shell=True, check=True,
                                stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error running command: {command}\n{e.stderr}")
        return None

def is_git_repo():
    return os.path.exists(".git")

def get_remote_url():
    return run_command("git config --get remote.origin.url")

def git_init():
    print("Initializing new Git repository...")
    run_command("git init")

def set_remote_url(repo_url):
    print(f"Setting remote origin to: {repo_url}")
    run_command("git remote add origin " + repo_url)

def git_add_commit_push(branch):
    run_command("git add .")
    commit_message = input("Enter commit message: ").strip()
    if not commit_message:
        commit_message = "Auto commit"
    run_command(f'git commit -m "{commit_message}"')

    print("Pulling latest changes (in case of conflicts)...")
    run_command(f"git pull origin {branch} --rebase")

    print("Pushing code to GitHub...")
    run_command(f"git push origin {branch}")

def main():
    if not is_git_repo():
        git_init()

    remote_url = get_remote_url()
    if not remote_url:
        repo_url = input("Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): ").strip()
        set_remote_url(repo_url)

    branch = input("Enter your GitHub branch name (e.g., main or master): ").strip()
    if not branch:
        branch = "main"

    git_add_commit_push(branch)

if __name__ == "__main__":
    main()
