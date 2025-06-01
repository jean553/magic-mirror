#!/bin/bash

echo '' > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label

while true
do
    arecord --format=S16_LE --rate=16000 --file-type=wav /tmp/audio.wav 1>/dev/null 2>/dev/null &
		pid=$!
		sleep 2
		kill -SIGINT $pid

		sox /tmp/audio.wav -n stat 2> /tmp/output
		frequency=$(cat /tmp/output | grep frequency | cut -d':' -f2 | column -t)

		if (( $frequency < 400 )); then
			continue;
		fi

		echo '...' > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label

		curl -i -X PUT https://my-remote-server/uploads/audio.wav -u 'magicmirror:...' -H "Content-Type: audio/wav" --data-binary "@/tmp/audio.wav"

		curl -i https://my-remote-server/script.sh -u 'magicmirror:...'

		curl https://my-remote-server/audio.wav.txt -u 'magicmirror:...' -o /tmp/audio_output

		listening_sentence=0

    while IFS= read -r line; do
    		printf '%s\n' "$line"
        string="${line,,}"
        if [[ $string == *"hello"* ]]; then
					listening_sentence=1
				fi
    done < /tmp/audio_output

		if [[ $listening_sentence == 0 ]]; then
  		echo '' > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label
			continue
		fi

  	echo "Listening..." > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label

    arecord --format=S16_LE --rate=16000 --file-type=wav /tmp/audio.wav 1>/dev/null 2>/dev/null &
		pid=$!
		sleep 10
		kill -SIGINT $pid

  	echo "Processing..." > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label

		curl -i -X PUT https://my-remote-server/uploads/audio.wav -u 'magicmirror:...' -H "Content-Type: audio/wav" --data-binary "@/tmp/audio.wav"
		curl -i https://my-remote-server/script_medium_en.sh -u 'magicmirror:...'

		curl https://my-remote-server/audio.wav.txt -u 'magicmirror:...' -o /tmp/audio_output

		echo "Processing: " > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label
		cat /tmp/audio_output >> /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label

		python3 /home/jean/git/jean-lelievre/mm-openai-images-generator/main.py "$(cat /tmp/audio_output)"

		echo '' > /home/jean/MagicMirror/modules/MMM-SimpleText/audio_label
done
